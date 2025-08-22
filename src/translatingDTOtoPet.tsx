import type {pet} from "./Atoms.tsx";
import type {PetDto} from "../Api.ts";

function translatingDTOtoPet(dto: PetDto): pet {
    return {
        id: dto.id || "",
        name: dto.name || "",
        breed: dto.breed || "",
        imgurl: dto.imgurl || "",
        sold: dto.sold ?? false,
    };
}
export default translatingDTOtoPet;