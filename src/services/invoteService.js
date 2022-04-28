import BackendService from './BackendService';
import axios from 'axios';

//get all Candidate
const getCandidate = async() => {
    return BackendService.get(`candidates/`);
};

//add Candidate
const addCandidate = async(data)=>{
    return BackendService.post("candidates/" , data)
}

//get all voters
const getAllVoters = async() => {
    return BackendService.get(`voters/`);
};

//add voter
const addVoter = async(data)=>{
    return BackendService.post("voters/" , data)
}

//get all posts
const getAllPosts = async()=>{
    return BackendService.post("posts/")
}

//get Candidates By Post
const getCandidateByPost = async(post)=>{
    return BackendService.post(`candidates/${post}`)
}

const invoteService = {
    getCandidate,
    addCandidate,
    getAllVoters,
    addVoter,
    getAllPosts,
    getCandidateByPost,
  };

export default invoteService;