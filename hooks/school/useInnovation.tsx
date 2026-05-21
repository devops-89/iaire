import { schoolControllers } from "@/app/api/schoolControllers";
import { SCHOOL_ADD_INNOVATION_REQUEST_PROPS } from "@/utils/type";
import { useState } from "react"



export const useCreateInnovation = () => {

    const [loading, setLoading] = useState(false);

    const createInnovation = async (data: SCHOOL_ADD_INNOVATION_REQUEST_PROPS) => {
        setLoading(true);
        // schoolControllers.
    }
}