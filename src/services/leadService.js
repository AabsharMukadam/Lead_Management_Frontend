import api from "./api";

export const getLeads = async (
  search = "",
  status = "",
  priority = "",
  source = "",
  page = 1,
  limit = 10,
  sortBy = "created_at",
  order = "desc"
) => {
  const response = await api.get("/leads/", {
    params: {
      search: search || undefined,
      status: status || undefined,
      priority: priority || undefined,
      source: source || undefined,
      page,
      limit,
      sort_by: sortBy,
      order,
    },
  });

  return response.data;
};

export const getLeadById = async (leadId) => {
  const response = await api.get(`/leads/${leadId}`);

  return response.data;
};

export const createLead = async (leadData) => {
  const response = await api.post("/leads/", leadData);

  return response.data;
};

export const updateLead = async (leadId, leadData) => {
  const response = await api.put(
    `/leads/${leadId}`,
    leadData
  );

  return response.data;
};

export const deleteLead = async (leadId) => {
  const response = await api.delete(`/leads/${leadId}`);

  return response.data;
};

export const getLeadStats = async () => {
  const response = await api.get("/leads/stats");
  return response.data;
};