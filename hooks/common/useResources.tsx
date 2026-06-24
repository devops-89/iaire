import { ResourceControllers } from "@/app/api/resourcesControllers";
import { useState, useEffect } from "react";

export interface ResourceItem {
  id: number;
  title: string;
  description: string;
  fileUrl?: string;
  category?: string;
  type?: string;
}

export const useGetResources = () => {
  const [loading, setLoading] = useState(false);
  const [resources, setResources] = useState<ResourceItem[]>([]);

  const fetchResources = async () => {
    setLoading(true);
    try {
      const res = await ResourceControllers.getAllResources();
      if (Array.isArray(res)) {
        setResources(res);
      } else if (res && Array.isArray(res.data)) {
        setResources(res.data);
      } else if (res && res.data && Array.isArray(res.data.data)) {
        setResources(res.data.data);
      } else {
        setResources([]);
      }
    } catch (err) {
      console.log("error fetching resources", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResources();
  }, []);

  return { resources, loading, fetchResources };
};
