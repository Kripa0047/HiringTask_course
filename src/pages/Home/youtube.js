import axios from 'axios';
 
const youtubeSearch = async () => {
        try {
                let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=Maths&type=video&key=AIzaSyAyr2oKkCQxMOjcTvPhy7K98C-SP4dnRs8`);
                console.log(response);
        } catch (error) {
                console.log(error);
        }
}

export default youtubeSearch;