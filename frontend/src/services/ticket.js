import axios from "axios";

const API_ENDPOINT = "http://localhost:5000";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const getAllTickets = async () => {
  const res = await axios.get(`${API_ENDPOINT}/tickets`, ticketData, config);
  return res;
};

export const addNewTicket = async (ticketData) => {
  const res = await axios.post(
    `${API_ENDPOINT}/tickets/add`,
    ticketData,
    config
  );
  return res;
};

export const editTicket = async (id, ticketData) => {
  const res = await axios.put(
    `${API_ENDPOINT}/tickets/${id}`,
    ticketData,
    config
  );
  return res;
};

export const closeTicket = async (id) => {
  const res = await axios.put(
    `${API_ENDPOINT}/tickets/mark-ticket/${id}`,
    config
  );
  return res;
};

export const deleteTicket = async (id) => {
  const res = await axios.delete(`${API_ENDPOINT}/tickets/${id}`, config);
  return res;
};
