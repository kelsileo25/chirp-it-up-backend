
import { Query } from "./index";

const all = async () => Query("select chirps.id, name, chirps.userid, content, location, chirps._created from chirps inner join users on chirps.userid = users.id order by chirps.id");
const single = async (id) => Query("SELECT * FROM chirps WHERE ID = ?", [id]);
const permalink = async (id) => Query("Select name, content, location, chirps._created from chirps inner join users on chirps.userid = users.id where chirps.id = ?", [id]);
const newPost = async (userid, content, location) => Query(`insert into chirps (userid, content, location) values (${userid}, "${content}", "${location}")`);
const users = async () => Query("Select id, name from users");
const destroy = async (id) => Query(`Delete from Chirps Where ID = ${id}`);
const put = async (id, userid, content, location) => Query(`update chirps set content = "${content}", userid = ${userid}, location = "${location}" where id = ${id}`);
const mention = async (userId, chirpId) => Query(`insert into mentions (userid, chirpid) values (${userId}, ${chirpId})`);
const allMentions = async(userId) => Query(`call spUserMentions(${userId})`);

export default {
    all,
    single,
    permalink,
    newPost,
    users,
    destroy,
    put,
    mention,
    allMentions
};