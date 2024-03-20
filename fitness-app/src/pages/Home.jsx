import NavBar from "../components/nav-bar";
import GifContainer from "../components/gifContainer";
import App from "../App";
function Home({ data }) {
    return (
        <>
            <h1>Exercise 1</h1>
            <div><GifContainer gifs={data} />
            </div>


        </>
    )
}
export default Home