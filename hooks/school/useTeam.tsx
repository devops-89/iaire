import { schoolControllers } from "@/app/api/schoolControllers";
import { useModal } from "@/store/useModal";
import { CATEGORY } from "@/utils/enum";
import { CREATE_TEAM_REQUEST, TEAM_DETAILS_RESPONSE } from "@/utils/type";
import { useEffect, useState } from "react";

export const useAddTeam = () => {
  const [loading, setLoading] = useState(false);
  const { hideModal } = useModal();
  const createTeam = async (data: CREATE_TEAM_REQUEST) => {
    setLoading(true);
    schoolControllers
      .createTeam(data)
      .then((res) => {
        console.log("res", res);
        hideModal();
        setLoading(false);
      })
      .catch((err) => {
        console.log("error in creating team", err);
        setLoading(false);
      });
  };

  return { loading, createTeam };
};


export const useGetTeam = () => {
  const [loading, setLoading] = useState(false);
  const [teamData, setTeamData] = useState<{ data: TEAM_DETAILS_RESPONSE[] }>();


  const fetchData = (params?: { type?: CATEGORY }) => {

    schoolControllers.getTeam({ type: params?.type }).then((res) => {
      setTeamData(res.data)
      setLoading(false)
    }).catch((err) => {
      console.log("error in fetching team", err);
      setLoading(false)
    })
  }

  return { fetchData, loading, teamData };


}
