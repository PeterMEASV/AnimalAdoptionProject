import {useNavigate} from "react-router";

function List() {

    const navigate = useNavigate();

    return (
        <>
            <div className="flex flex-col items-center">
        <h1>List</h1>

            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src="https://i.imgur.com/KVHlJpA.jpeg"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Pet 1</h2>
                    <p>Pet 1 is pretty cool tbh.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={() => {
                            navigate(
                                '/pet/1'
                            )
                        }}>Rent Now</button>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src="https://i.imgur.com/QnLBqhO.jpeg"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Pet 2</h2>
                    <p>Pet 2 is also pretty cool, but look at pet 1.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={
                            () => {
                                navigate(
                                    '/pet/2'
                                )
                            }
                        }>Rent Now</button>
                    </div>
                </div>
            </div>

            </div>
        </>
    )
}
export default List;