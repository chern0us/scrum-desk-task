import axios from "axios";

import { apiPrefix } from "../../etc/config.json";

export default {
  listColumns() {
    return axios.get(`${apiPrefix}/columns`);
  },

  createColumn(data) {
    return axios.post(`${apiPrefix}/columns`, { type: "column", ...data });
  },

  deleteColumn(columnId) {
    return axios.delete(`${apiPrefix}/columns/${columnId}/${false}`);
  },

  addTaskToColumn(columnId, data) {
    return axios.post(`${apiPrefix}/columns`, {
      type: "task",
      id: columnId,
      ...data
    });
  },

  deleteTask(columnId, taskId) {
    return axios.delete(`${apiPrefix}/columns/${columnId}/${taskId}`, {
      type: "task",
      columnId,
      taskId
    });
  }
};
