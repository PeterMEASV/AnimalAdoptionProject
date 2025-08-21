import {useParams} from "react-router";

function Pet() {

    const params = useParams()

    return (
        <div>{
            JSON.stringify(params)
        }
        </div>
    )
}
export default Pet;