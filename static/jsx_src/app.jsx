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
    const { createHashRouter, RouterProvider, Link, useNavigate } = ReactRouterDOM

    const PARCEL_SIZES = ['XS', 'S', 'M', 'L', 'XL',]
    const LOCKER_STATES = ['OK', 'ON_MAINTENANCE', 'FAILED',]

    // #region redux
    const fetch_lockers = createAsyncThunk('lockers/fetch_lockers', async () => {
        const record_l = await fetch("/api/locker").then(res => res.json())
        return record_l
    })
    const add_new_locker = createAsyncThunk('lockers/add_1_locker', async ([record_data, navigate]) => {
        const new_rec_id = await fetch(
            "/api/locker",
            {
                method: "POST",
                body: JSON.stringify(record_data),
            }
        ).then(res => res.json())
        return [
            Object.assign(
                { id: new_rec_id },
                record_data,
            ),
            navigate
        ]
    })
    const delete_locker = createAsyncThunk('lockers/delete_locker', async (record_id) => {
        await fetch(
            "/api/locker",
            {
                method: "DELETE",
                body: JSON.stringify(record_id),
            }
        )
        return record_id
    })

    const locker_adapter = createEntityAdapter()
    const locker_slice = createSlice({
        name: 'lockers',
        initialState: locker_adapter.getInitialState({
            status: 'idle',
            // error: null
        }),
        reducers: {},
        extraReducers(builder) {
            builder
                .addCase(fetch_lockers.fulfilled, (state, action) => {
                    state.status = 'succeeded'
                    locker_adapter.upsertMany(state, action.payload)
                })
                .addCase(add_new_locker.fulfilled, locker_adapter.removeOne)
        }
    })

    const {
        selectAll: select_all_lockers,
        selectById: select_locker_by_id,
        // selectIds: selectPostIds
    } = locker_adapter.getSelectors(state => state.lockers)

    const store = configureStore({
        reducer: {
            lockers: locker_slice.reducer,
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
                                        <Link to="/" className="btn btn-primary" role="button">
                                            Edit
                                        </Link>
                                        &nbsp;
                                        <button
                                            type="button" class="btn btn-danger"
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
    function LockersAdd() {
        const dispatch = useDispatch()
        const navigate = useNavigate()

        const [lockerAddress, setLockerAddress] = useState('');

        const [lockerCapacityXS, setLockerCapacityXS] = useState(0);
        const [lockerCapacityS, setLockerCapacityS] = useState(0);
        const [lockerCapacityM, setLockerCapacityM] = useState(0);
        const [lockerCapacityL, setLockerCapacityL] = useState(0);
        const [lockerCapacityXL, setLockerCapacityXL] = useState(0);

        const [lockerState, setLockerState] = useState('ON_MAINTENANCE');

        function ok_click() {
            dispatch(
                add_new_locker(
                    [
                        {
                            full_address: lockerAddress,
                            capacity_xs: lockerCapacityXS,
                            capacity_s: lockerCapacityS,
                            capacity_m: lockerCapacityM,
                            capacity_l: lockerCapacityL,
                            capacity_xl: lockerCapacityXL,
                            status: lockerState,
                        },
                        navigate
                    ]
                )
            )
        }

        return (
            <>
                <div className="row">
                    <div className="col">
                        <h2>Add Locker</h2>
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

                    <Link to="/lockers" className="btn btn-secondary" role="button">
                        Cancel
                    </Link>
                    &nbsp;
                    <button
                        type="button" className="btn btn-primary" onClick={ok_click}
                    >
                        Create
                    </button>
                </form>
            </>
        )
    }
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
            path: "parcels",
            element: <div>Hello par! <Link to="/">home</Link> </div>,
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
