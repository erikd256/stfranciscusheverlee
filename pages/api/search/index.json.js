import { client } from "../../../.tina/__generated__/client";

export default (req, res) => {
    res.status(200).json({ search: "index" });
  };