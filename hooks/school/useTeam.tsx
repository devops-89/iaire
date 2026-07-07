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
  const [teamData, setTeamData] = useState<TEAM_DETAILS_RESPONSE[]>([]);

  const fetchData = (params?: { type?: CATEGORY }) => {
    setLoading(true);
    schoolControllers
      .getTeam({ type: params?.type })
      .then((res) => {
        setTeamData(res.data?.data || res.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.log("error in fetching team", err);
        setLoading(false);
      });
  };

  return { fetchData, loading, teamData };
};

export const useGetTeamDetails = (id: number) => {
  const [loading, setLoading] = useState(false);
  const [teamDetails, setTeamDetails] = useState<TEAM_DETAILS_RESPONSE | null>(
    null,
  );

  const fetchTeamDetails = () => {
    if (!id) return;
    setLoading(true);
    schoolControllers
      .getTeamDetails(id)
      .then((res) => {
        setTeamDetails(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("error in fetching team details", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchTeamDetails();
  }, [id]);

  return { loading, teamDetails, fetchTeamDetails };
};

export const useEditTeam = () => {
  const [loading, setLoading] = useState(false);
  const { hideModal } = useModal();
  const editTeamData = async (data: CREATE_TEAM_REQUEST, id: number) => {
    schoolControllers
      .editTeam(id, data)
      .then((res) => {
        setLoading(false);
        hideModal();
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  return { editTeamData, loading };
};
