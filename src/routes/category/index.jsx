import { useParams } from "react-router-dom";
import Rooms from "../../components/rooms";
import Blog from "../../components/blog";
import Error from "../../common/error";
import Pages from "../../components/pages";
import ClassicFood from "../../components/pages/classicfood";

const Category = () => {
    const { category } = useParams();

    let content;
    switch (category) {
        
        case "rooms":
            content = <Rooms />;
            break;
        case "blog":
            content = <Blog />;
            break;
        case "pages":
            content = <Pages />;
            break;
        case "food":
            content = <ClassicFood />;
            break;
        default:
            content = <Error />;
    }

    return content;
};

export default Category;
