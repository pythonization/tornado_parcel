(function () {
    const { useEffect, useState } = React
    const {
        configureStore,
        createAsyncThunk, createEntityAdapter, createSlice
    } = RTK
    const {
        Provider,
        useSelector, useDispatch
    } = ReactRedux
    const {
        createHashRouter,
        RouterProvider, Link,
        useNavigate, useParams,
    } = ReactRouterDOM

    const PARCEL_SIZES = ['XS', 'S', 'M', 'L', 'XL',]
    const LOCKER_STATES = ['OK', 'ON_MAINTENANCE', 'FAILED',]

    async function fetch_m2(url, fetch_params, { return_json }) {
        let result = await fetch(url, fetch_params)

        if (result.status == 400) {
            throw Error(
                await result.text()
            )
        }

        if (result.status != 200) {
            throw Error('Wrong status code (and this is not validation error)')
        }

        if (return_json) {
            result = await result.json()
        }

        return result
    }

    // #region redux
    function set_error_msg(state, action) {
        state.error = action.error.message
    }
    function alert_error(state, action) {
        alert(action.error.message)
    }

    // #region lockers
    const fetch_lockers = createAsyncThunk('lockers/fetch_lockers', async () => {
        const record_l = await fetch_m2(
            "/api/locker",
            {},
            { return_json: true },
        )
        return record_l
    })
    const add_new_locker = createAsyncThunk('lockers/add_1_locker', async ([record_data, navigate]) => {
        const new_rec_id = await fetch_m2(
            "/api/locker",
            {
                method: "POST",
                body: JSON.stringify(record_data),
            },
            { return_json: true },
        )
        return [
            Object.assign(
                { id: new_rec_id },
                record_data,
            ),
            navigate
        ]
    })
    const update_locker = createAsyncThunk('lockers/update_locker', async ([record_data, navigate]) => {
        await fetch_m2(
            "/api/locker",
            {
                method: "PUT",
                body: JSON.stringify(record_data),
            },
            {}
        )

        return [
            record_data,
            navigate
        ]
    })
    const delete_locker = createAsyncThunk('lockers/delete_locker', async (record_id) => {
        await fetch_m2(
            "/api/locker",
            {
                method: "DELETE",
                body: JSON.stringify(record_id),
            },
            {}
        )
        return record_id
    })

    const locker_adapter = createEntityAdapter()
    const locker_slice = createSlice({
        name: 'lockers',
        initialState: locker_adapter.getInitialState({
            status: 'idle',
            error: null
        }),
        reducers: {},
        extraReducers(builder) {
            builder
                .addCase(fetch_lockers.fulfilled, (state, action) => {
                    state.status = 'succeeded'
                    locker_adapter.upsertMany(state, action.payload)
                })
                .addCase(add_new_locker.fulfilled, (state, action) => {
                    const [rec_with_id, navigate] = action.payload;
                    locker_adapter.addOne(state, rec_with_id)
                    navigate('/lockers')
                })
                .addCase(update_locker.fulfilled, (state, action) => {
                    const [locker_r, navigate] = action.payload;
                    locker_adapter.setOne(state, locker_r)
                    navigate('/lockers')
                })
                .addCase(delete_locker.fulfilled, locker_adapter.removeOne)

                .addCase(add_new_locker.rejected, set_error_msg)
                .addCase(update_locker.rejected, set_error_msg)
                .addCase(delete_locker.rejected, alert_error)
        }
    })

    const {
        selectAll: select_all_lockers,
        selectById: select_locker_by_id,
        // selectIds: selectPostIds
    } = locker_adapter.getSelectors(state => state.lockers)
    // #endregion

    // #region parcel
    const fetch_parcels = createAsyncThunk('parcels/fetch_parcels', async () => {
        const record_l = await fetch_m2(
            "/api/parcel",
            {},
            { return_json: true },
        )
        return record_l
    })
    const add_new_parcel = createAsyncThunk('parcels/add_1_parcel', async ([record_data, navigate]) => {
        const new_rec_id = await fetch_m2(
            "/api/parcel",
            {
                method: "POST",
                body: JSON.stringify(record_data),
            },
            { return_json: true },
        )
        return [
            Object.assign(
                { id: new_rec_id },
                record_data,
            ),
            navigate
        ]
    })
    const update_parcel = createAsyncThunk('parcels/update_parcel', async ([record_data, navigate]) => {
        await fetch_m2(
            "/api/parcel",
            {
                method: "PUT",
                body: JSON.stringify(record_data),
            },
            {}
        )

        return [
            record_data,
            navigate
        ]
    })
    const delete_parcel = createAsyncThunk('parcels/delete_parcel', async (record_id) => {
        await fetch_m2(
            "/api/parcel",
            {
                method: "DELETE",
                body: JSON.stringify(record_id),
            },
            {}
        )
        return record_id
    })

    const parcel_adapter = createEntityAdapter()
    const parcel_slice = createSlice({
        name: 'parcels',
        initialState: parcel_adapter.getInitialState({
            status: 'idle',
            error: null,
        }),
        reducers: {},
        extraReducers(builder) {
            builder
                .addCase(fetch_parcels.fulfilled, (state, action) => {
                    state.status = 'succeeded'
                    parcel_adapter.upsertMany(state, action.payload)
                })
                .addCase(add_new_parcel.fulfilled, (state, action) => {
                    state.error = null
                    const [rec_with_id, navigate] = action.payload;
                    parcel_adapter.addOne(state, rec_with_id)
                    navigate('/parcels')
                })
                .addCase(update_parcel.fulfilled, (state, action) => {
                    state.error = null
                    const [parcel_r, navigate] = action.payload;
                    parcel_adapter.setOne(state, parcel_r)
                    navigate('/parcels')
                })
                .addCase(delete_parcel.fulfilled, parcel_adapter.removeOne)

                .addCase(add_new_parcel.rejected, set_error_msg)
                .addCase(update_parcel.rejected, set_error_msg)
                .addCase(delete_parcel.rejected, alert_error)
        }
    })

    const {
        selectAll: select_all_parcels,
        selectById: select_parcel_by_id,
        // selectIds: selectPostIds
    } = parcel_adapter.getSelectors(state => state.parcels)
    // #endregion

    const store = configureStore({
        reducer: {
            lockers: locker_slice.reducer,
            parcels: parcel_slice.reducer,
        }
    })
    // #endregion

    // #region react
    const root = (
        <div className="row">
            <div className="col">
                <Link to="/lockers" className="btn btn-primary" role="button">
                    View Lockers
                </Link>
                &nbsp;
                <Link to="/parcels" className="btn btn-primary" role="button">
                    View Parcels
                </Link>
            </div>
        </div>
    )

    // #region lockers
    function LockersList() {
        const dispatch = useDispatch()

        const lockers_status = useSelector(state => state.lockers.status)
        const lockers_list = useSelector(select_all_lockers)

        useEffect(() => {
            if (lockers_status === 'idle') {
                dispatch(fetch_lockers())
            }
        }, [lockers_status, dispatch])

        return (
            <>
                <div className="row">
                    <div className="col">
                        <Link to="/" className="btn btn-primary" role="button">
                            Home
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h2>Lockers</h2>
                    </div>
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Full Address</th>
                            <th>Capacity XS</th>
                            <th>Capacity S</th>
                            <th>Capacity M</th>
                            <th>Capacity L</th>
                            <th>Capacity XL</th>
                            <th>Status</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {
                            lockers_list.map(locker_r => (
                                <tr key={locker_r.id}>
                                    <td>{locker_r.full_address}</td>
                                    <td>{locker_r.capacity_xs}</td>
                                    <td>{locker_r.capacity_s}</td>
                                    <td>{locker_r.capacity_m}</td>
                                    <td>{locker_r.capacity_l}</td>
                                    <td>{locker_r.capacity_xl}</td>
                                    <td>{locker_r.status}</td>
                                    <td>
                                        <Link to={`/lockers/edit/${locker_r.id}`} className="btn btn-primary" role="button">
                                            Edit
                                        </Link>
                                        &nbsp;
                                        <button
                                            type="button" className="btn btn-danger"
                                            onClick={e => dispatch(
                                                delete_locker(locker_r.id)
                                            )}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                <Link to="/lockers/add" className="btn btn-primary" role="button">
                    Add Locker
                </Link>
            </>
        )
    }
    function LockersForm({
        initial_values,
        create_ok_bt_action,
        header_txt, save_bt_txt,
    }) {
        const dispatch = useDispatch()

        const lockers_error = useSelector(state => state.lockers.error)

        const [lockerAddress, setLockerAddress] = useState(initial_values.full_address);

        const [lockerCapacityXS, setLockerCapacityXS] = useState(initial_values.capacity_xs);
        const [lockerCapacityS, setLockerCapacityS] = useState(initial_values.capacity_s);
        const [lockerCapacityM, setLockerCapacityM] = useState(initial_values.capacity_m);
        const [lockerCapacityL, setLockerCapacityL] = useState(initial_values.capacity_l);
        const [lockerCapacityXL, setLockerCapacityXL] = useState(initial_values.capacity_xl);

        const [lockerState, setLockerState] = useState(initial_values.status);

        function ok_click() {
            dispatch(
                create_ok_bt_action({
                    full_address: lockerAddress,

                    capacity_xs: parseInt(lockerCapacityXS),
                    capacity_s: parseInt(lockerCapacityS),
                    capacity_m: parseInt(lockerCapacityM),
                    capacity_l: parseInt(lockerCapacityL),
                    capacity_xl: parseInt(lockerCapacityXL),

                    status: lockerState,
                })
            )
        }

        return (
            <>
                <div className="row">
                    <div className="col">
                        <h2>
                            {header_txt}
                        </h2>
                    </div>
                </div>
                <form>
                    <div className="mb-3">
                        <label htmlFor="locker_full_address" className="form-label">
                            Full Address
                        </label>
                        <input
                            className="form-control" id="locker_full_address"
                            value={lockerAddress} onChange={e => setLockerAddress(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="locker_capacity_xs" className="form-label">
                            Capacity XS
                        </label>
                        <input
                            className="form-control" id="locker_capacity_xs" type="number"
                            value={lockerCapacityXS} onChange={e => setLockerCapacityXS(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="locker_capacity_s" className="form-label">
                            Capacity S
                        </label>
                        <input
                            className="form-control" id="locker_capacity_s" type="number"
                            value={lockerCapacityS} onChange={e => setLockerCapacityS(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="locker_capacity_m" className="form-label">
                            Capacity M
                        </label>
                        <input
                            className="form-control" id="locker_capacity_m" type="number"
                            value={lockerCapacityM} onChange={e => setLockerCapacityM(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="locker_capacity_l" className="form-label">
                            Capacity L
                        </label>
                        <input
                            className="form-control" id="locker_capacity_l" type="number"
                            value={lockerCapacityL} onChange={e => setLockerCapacityL(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="locker_capacity_xl" className="form-label">
                            Capacity XL
                        </label>
                        <input
                            className="form-control" id="locker_capacity_xl" type="number"
                            value={lockerCapacityXL} onChange={e => setLockerCapacityXL(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        State
                        <select className="form-select" aria-label="State" value={lockerState} onChange={e => setLockerState(e.target.value)}>
                            {
                                LOCKER_STATES.map(code => (
                                    <option value={code} key={code}>
                                        {code}
                                    </option>
                                ))
                            }
                        </select>
                    </div>

                    {
                        lockers_error &&
                        <div className="alert alert-warning" role="alert">
                            {lockers_error}
                        </div>
                    }

                    <Link to="/lockers" className="btn btn-secondary" role="button">
                        Cancel
                    </Link>
                    &nbsp;
                    <button
                        type="button" className="btn btn-primary" onClick={ok_click}
                    >
                        {save_bt_txt}
                    </button>
                </form>
            </>
        )
    }
    function LockersAdd() {
        const navigate = useNavigate()

        const initial_values = {
            full_address: '',
            capacity_xs: 0,
            capacity_s: 0,
            capacity_m: 0,
            capacity_l: 0,
            capacity_xl: 0,
            status: 'ON_MAINTENANCE',
        }
        function create_ok_bt_action(values) {
            return add_new_locker(
                [values, navigate]
            )
        }

        return (
            <LockersForm
                initial_values={initial_values}
                create_ok_bt_action={create_ok_bt_action}
                header_txt="Add Locker" save_bt_txt="Create"
            />
        )
    }
    function LockersEdit() {
        const navigate = useNavigate()
        const { locker_id } = useParams();

        const initial_values = useSelector(state => select_locker_by_id(state, locker_id))
        if (!initial_values) {
            return <h2>Locker does not exist</h2>
        }

        function create_ok_bt_action(values) {
            values.id = locker_id
            return update_locker(
                [values, navigate]
            )
        }

        return (
            <LockersForm
                initial_values={initial_values}
                create_ok_bt_action={create_ok_bt_action}
                header_txt="Edit Locker" save_bt_txt="Update"
            />
        )
    }

    function LockerName({ locker_id }) {
        const locker_r = useSelector(state => select_locker_by_id(state, locker_id))
        return locker_r ?
            locker_r.full_address : '?'
    }
    // #endregion

    // #region parcels
    function ParcelsList() {
        const dispatch = useDispatch()

        const lockers_status = useSelector(state => state.lockers.status)
        const parcels_status = useSelector(state => state.parcels.status)
        const parcels_list = useSelector(select_all_parcels)

        useEffect(() => {
            if (lockers_status === 'idle') {
                // parcels need lockers data too
                dispatch(fetch_lockers())
            }
            if (parcels_status === 'idle') {
                dispatch(fetch_parcels())
            }
        }, [lockers_status, parcels_status, dispatch])

        return (
            <>
                <div className="row">
                    <div className="col">
                        <Link to="/" className="btn btn-primary" role="button">
                            Home
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h2>Parcels</h2>
                    </div>
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Sender full name</th>
                            <th>Sender phone</th>
                            <th>Sender email</th>

                            <th>Receiver full name</th>
                            <th>Receiver phone</th>
                            <th>Receiver email</th>

                            <th>Size</th>
                            <th>Current locker</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parcels_list.map(parcel_r => (
                                <tr key={parcel_r.id}>
                                    <td>{parcel_r.sender_full_name}</td>
                                    <td>{parcel_r.sender_phone}</td>
                                    <td>{parcel_r.sender_email}</td>
                                    <td>{parcel_r.receiver_full_name}</td>
                                    <td>{parcel_r.receiver_phone}</td>
                                    <td>{parcel_r.receiver_email}</td>
                                    <td>{parcel_r.size}</td>
                                    <td>
                                        <LockerName locker_id={parcel_r.locker_now_id} />
                                    </td>
                                    <td>
                                        <Link to={`/parcels/edit/${parcel_r.id}`} className="btn btn-primary" role="button">
                                            Edit
                                        </Link>
                                        &nbsp;
                                        <button
                                            type="button" className="btn btn-danger"
                                            onClick={e => dispatch(
                                                delete_parcel(parcel_r.id)
                                            )}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                <Link to="/parcels/add" className="btn btn-primary" role="button">
                    Add Parcel
                </Link>
            </>
        )
    }
    function ParcelsForm({
        initial_values,
        create_ok_bt_action,
        header_txt, save_bt_txt,
    }) {
        const dispatch = useDispatch()

        const lockers_list = useSelector(select_all_lockers)
        const parcels_error = useSelector(state => state.parcels.error)

        const [parcelSName, setParcelSName] = useState(initial_values.sender_full_name);
        const [parcelSPhone, setParcelSPhone] = useState(initial_values.sender_phone);
        const [parcelSEmail, setParcelSEmail] = useState(initial_values.sender_email);

        const [parcelRName, setParcelRName] = useState(initial_values.receiver_full_name);
        const [parcelRPhone, setParcelRPhone] = useState(initial_values.receiver_phone);
        const [parcelREmail, setParcelREmail] = useState(initial_values.receiver_email);

        const [parcelSize, setParcelSize] = useState(initial_values.size);
        const [parcelLockerNowId, setParcelLockerNowId] = useState(initial_values.locker_now_id);

        function ok_click() {
            dispatch(
                create_ok_bt_action({
                    sender_full_name: parcelSName,
                    sender_phone: parcelSPhone,
                    sender_email: parcelSEmail,

                    receiver_full_name: parcelRName,
                    receiver_phone: parcelRPhone,
                    receiver_email: parcelREmail,

                    size: parcelSize,
                    locker_now_id: parseInt(parcelLockerNowId),
                })
            )
        }

        return (
            <>
                <div className="row">
                    <div className="col">
                        <h2>
                            {header_txt}
                        </h2>
                    </div>
                </div>
                <form>

                    <div className="mb-3">
                        <label htmlFor="sender_full_name" className="form-label">
                            Sender full name
                        </label>
                        <input
                            className="form-control" id="sender_full_name"
                            value={parcelSName} onChange={e => setParcelSName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="sender_phone" className="form-label">
                            Sender phone
                        </label>
                        <input
                            className="form-control" id="sender_phone"
                            value={parcelSPhone} onChange={e => setParcelSPhone(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="sender_email" className="form-label">
                            Sender email
                        </label>
                        <input
                            className="form-control" id="sender_email"
                            value={parcelSEmail} onChange={e => setParcelSEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="receiver_full_name" className="form-label">
                            Receiver full name
                        </label>
                        <input
                            className="form-control" id="receiver_full_name"
                            value={parcelRName} onChange={e => setParcelRName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="receiver_phone" className="form-label">
                            Receiver phone
                        </label>
                        <input
                            className="form-control" id="receiver_phone"
                            value={parcelRPhone} onChange={e => setParcelRPhone(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="receiver_email" className="form-label">
                            Receiver email
                        </label>
                        <input
                            className="form-control" id="receiver_email"
                            value={parcelREmail} onChange={e => setParcelREmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        Size
                        <select className="form-select" aria-label="Size" value={parcelSize} onChange={e => setParcelSize(e.target.value)}>
                            {
                                PARCEL_SIZES.map(code => (
                                    <option value={code} key={code}>
                                        {code}
                                    </option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="mb-3">
                        Current Locker
                        <select className="form-select" aria-label="Current Locker" value={parcelLockerNowId} onChange={e => setParcelLockerNowId(e.target.value)}>
                            <option value={false} key={false}>
                                Not selected
                            </option>
                            {
                                lockers_list.map(locker_r => (
                                    <option value={locker_r.id} key={locker_r.id}>
                                        {locker_r.full_address}
                                    </option>
                                ))
                            }
                        </select>
                    </div>

                    {
                        parcels_error &&
                        <div className="alert alert-warning" role="alert">
                            {parcels_error}
                        </div>
                    }

                    <Link to="/parcels" className="btn btn-secondary" role="button">
                        Cancel
                    </Link>
                    &nbsp;
                    <button
                        type="button" className="btn btn-primary" onClick={ok_click}
                    >
                        {save_bt_txt}
                    </button>
                </form>
            </>
        )
    }
    function ParcelsAdd() {
        const navigate = useNavigate()

        const initial_values = {
            sender_full_name: '',
            sender_phone: '+371',
            sender_email: '',
            receiver_full_name: '',
            receiver_phone: '+371',
            receiver_email: '',
            size: 'XS',
            locker_now_id: false,
        }
        function create_ok_bt_action(values) {
            return add_new_parcel(
                [values, navigate]
            )
        }

        return (
            <ParcelsForm
                initial_values={initial_values}
                create_ok_bt_action={create_ok_bt_action}
                header_txt="Add Parcel" save_bt_txt="Create"
            />
        )
    }
    function ParcelsEdit() {
        const navigate = useNavigate()
        const { parcel_id } = useParams();

        const initial_values = useSelector(state => select_parcel_by_id(state, parcel_id))
        if (!initial_values) {
            return <h2>Parcel does not exist</h2>
        }

        function create_ok_bt_action(values) {
            values.id = parcel_id
            return update_parcel(
                [values, navigate]
            )
        }

        return (
            <ParcelsForm
                initial_values={initial_values}
                create_ok_bt_action={create_ok_bt_action}
                header_txt="Edit Parcel" save_bt_txt="Update"
            />
        )
    }
    // #endregion

    // #endregion

    const router = createHashRouter([
        {
            path: "/",
            element: root,
        },

        {
            path: "lockers",
            element: <LockersList />,
        },
        {
            path: "lockers/add",
            element: <LockersAdd />,
        },
        {
            path: "lockers/edit/:locker_id",
            element: <LockersEdit />,
        },

        {
            path: "parcels",
            element: <ParcelsList />,
        },
        {
            path: "parcels/add",
            element: <ParcelsAdd />,
        },
        {
            path: "parcels/edit/:parcel_id",
            element: <ParcelsEdit />,
        },
    ]);

    ReactDOM.createRoot(
        document.getElementById('react_parcel_root')
    ).render(
        <React.StrictMode>
            <h1>Tornado Parcel</h1>

            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>

        </React.StrictMode>,
    )
})();
