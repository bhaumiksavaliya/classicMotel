// import { v4 as uuidv4 } from 'uuid';

import { FaCaretDown } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

import Burger from "../assets/images/food/Burger.jpg";
import Biriyani from "../assets/images/food/birayani.webp";
import chole from "../assets/images/Lunch/chole.jpg";
import Classicpizza from "../assets/images/food/classic-cheese-pizza.jpg";
import Dhosapizza from "../assets/images/food/Dhosapizza.webp";
import Frankie from "../assets/images/Lunch/franki.webp";
import Jalebi from "../assets/images/food/BreakFast/jalebi.jpg";
import Momos from "../assets/images/Lunch/momo.jpg";
import MasalaTea from "../assets/images/food/BreakFast/masala-chai1.jpg";
import AcaiBowl from "../assets/images/food/BreakFast/Açai Bowl brazil.jpg";
import Arepas from "../assets/images/food/BreakFast/Arepas colombia.jpg";
import Idli from "../assets/images/food/BreakFast/Idali.jpg";
import Kedgeree from "../assets/images/food/BreakFast/Kedgeree scotland.jpg";
import Khachapuri from "../assets/images/food/BreakFast/Khachapuri (Georgia).webp";
import Kumpir from "../assets/images/food/BreakFast/Kumpir tuerky.jpg";
import LoxAndBagels from "../assets/images/food/BreakFast/Lox and Bagels (USA).jpeg";
import Coffee from "../assets/images/food/BreakFast/cofee.avif";
import Tosti from "../assets/images/food/BreakFast/tosti.avif";
import TurkishEggs from "../assets/images/food/BreakFast/turkis egg with butter.jpg";
import Zopf from "../assets/images/food/BreakFast/zopf switzarland.jpeg";
import AvocadoToast from "../assets/images/food/BreakFast/avocado tost aus.jpg";
import BagelsWithLox from "../assets/images/food/BreakFast/Bagels with Lox US.jpg";
import CinnamonToast from "../assets/images/Lunch/Honeytoast.avif"
import Salad from "../assets/images/Lunch/Salad.avif"
import Fries from "../assets/images/Dinner/Frieswithsouse.avif"
import Salmon from "../assets/images/Dinner/salmon and zucchini.jpg"


import Blogspa from "../assets/images/blog/Spa.jpg";
import Dining from "../assets/images/blog/dinig.jpg";
import Room from "../assets/images/blog/Rooms.jpg";
import Gym from "../assets/images/Gym.jpg";

const categoryApi = [
    {
        category: "HOME",
        path: "/",
        product: [],
    },
    {
        category: "ROOMS",
        // icon: FaAngleDown,
        // micon: FaCaretDown,
        path: "/rooms",
        product: [],
    },
    {
        category: "MENU",
        // icon: FaAngleDown,
        // micon: FaCaretDown,
        path: "/food",
        subPages: [
            {
                id: 1,
                date: "MAY 16",
                category: "NEWS · DINING",
                image: Dining,
                name: "Classic Food",
                path: "/food",
                product: [
                    {
                        objectId: "23d-3e35-2w9f-4fr5-001",
                        Foodname: "Classic Pizza",
                        img: Classicpizza,
                        price: "$12",
                        description: "A delightful combination of traditional Italian flavors, baked to perfection. Our classic pizza is a favorite for any meal of the day.",
                        details: [{ type: "Lunch, Dinner, Italian" }, { country: "Italy" }],
                        btn: "Add To Cart",

                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-002",
                        Foodname: "Burger",
                        img: Burger,
                        price: "$8",
                        description: "Juicy and flavorful, this burger is made from the finest ingredients. Perfect for a quick snack or a hearty meal.",
                        details: [{ type: "Lunch, Snacks" }, { country: "USA" }],
                        btn: "Add To Cart",
                    },
                   
                    {
                        objectId: "23d-3e35-2w9f-4fr5-009",
                        Foodname: "Masala Tea",
                        img: MasalaTea,
                        price: "$10",
                        description: "A spiced Indian tea brewed with aromatic herbs and spices. A refreshing and healthy start to your day.",
                        details: [{ type: "Breakfast, Snacks, Healthy" }, { country: "India" }],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-010",
                        Foodname: "Açai Bowl",
                        img: AcaiBowl,
                        price: "$150",
                        description: "A nutritious and vibrant bowl filled with frozen açai berries, topped with fruits and granola. A superfood from Brazil.",
                        details: [{ type: "Breakfast, Healthy" }, { country: "Brazil" }],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-011",
                        Foodname: "Arepas",
                        img: Arepas,
                        price: "$100",
                        description: "Traditional Colombian cornmeal cakes, served as a snack or main course. Rich and flavorful.",
                        details: [{ type: "Dinner, Main Course" }, { country: "Colombia" }],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-012",
                        Foodname: "Idli",
                        img: Idli,
                        price: "$50",
                        description: "A soft and spongy steamed rice cake, often served with chutney and sambar. A healthy breakfast option from South India.",
                        details: [{ type: "Breakfast, Snacks" }, { country: "India" }],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-003",
                        Foodname: "Dhosapizza",
                        img: Dhosapizza,
                        price: "$10",
                        description: "A fusion dish that blends the flavors of South Indian dosa with the classic pizza toppings. A unique twist on pizza!",
                        details: [{ type: "Snacks,Dinner" }, { country: "India" }],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-004",
                        Foodname: "Franki",
                        img: Frankie,
                        price: "$5",
                        description: "A delicious and spicy Indian wrap filled with your choice of veggies or meat. Perfect for a quick bite.",
                        details: [{ type: "Snacks, Lunch" }, { country: "India" }],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-005",
                        Foodname: "Momos",
                        img: Momos,
                        price: "$4",
                        description: "Steamed dumplings filled with savory vegetables or meat. A popular snack originating from Nepal.",
                        details: [{ type: "Snacks, Lunch" }, { country: "Nepal" }],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-006",
                        Foodname: "Biriyani",
                        img: Biriyani,
                        price: "$15",
                        description: "An aromatic rice dish with rich spices and flavorful meat or veggies. A must-try main course from India.",
                        details: [{ type: "Main Course, Dinner" }, { country: "India" }],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-007",
                        Foodname: "Chole",
                        img: chole,
                        price: "$6",
                        description: "A spicy and tangy chickpea curry, perfect for lunch or dinner. A favorite in Indian vegetarian cuisine.",
                        details: [{ type: "Lunch, Vegetarian" }, { country: "India" }],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-008",
                        Foodname: "Jalebi",
                        img: Jalebi,
                        price: "$3",
                        description: "A crispy, sweet, deep-fried dessert dipped in sugary syrup. A popular choice for breakfast in India.",
                        details: [{ type: "Dessert, Sweet, Breakfast" }, { country: "India" }],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-013",
                        Foodname: "Kedgeree",
                        img: Kedgeree,
                        price: "$180",
                        description: "A comforting Scottish rice dish with fish and boiled eggs. A hearty meal perfect for dinner.",
                        details: [{ type: "Dinner, Rice Dish" }, { country: "Scotland" }],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-014",
                        Foodname: "Khachapuri",
                        img: Khachapuri,
                        price: "$120",
                        description: "A Georgian bread filled with melted cheese and a soft-cooked egg. A delicious treat for dinner or snacks.",
                        details: [{ type: "Dinner, Snacks" }, { country: "Georgia" }],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-015",
                        Foodname: "Kumpir",
                        img: Kumpir,
                        price: "$90",
                        description: "A popular Turkish baked potato dish stuffed with various fillings. Ideal for lunch or as a vegetarian meal.",
                        details: [{ type: "Lunch, Vegetarian" }, { country: "Turkey" }],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-016",
                        Foodname: "Lox and Bagels",
                        img: LoxAndBagels,
                        price: "$220",
                        description: "A classic American dish with smoked salmon and cream cheese on a bagel. A perfect breakfast or snack.",
                        details: [{ type: "Breakfast, Snacks" }, { country: "USA" }],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-017",
                        Foodname: "Coffee",
                        img: Coffee,
                        price: "$15",
                        description: "A strong and aromatic brew to energize your day. A universal beverage enjoyed globally.",
                        details: [{ type: "Breakfast, Beverage" }, { country: "Global" }],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-018",
                        Foodname: "Salad",
                        img: Salad,
                        price: "$10",
                        description: "A fresh and healthy bowl of greens, vegetables, and dressing. Ideal for a light lunch.",
                        details: [{ type: "Lunch" }, { country: "Australia" }],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-019",
                        Foodname: "Tosti",
                        img: Tosti,
                        price: "$60",
                        description: "A Dutch toasted sandwich made with ham and cheese. A perfect snack or breakfast option.",
                        details: [{ type: "Snack, Breakfast" }, { country: "Netherlands" }],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-020",
                        Foodname: "Turkish Egg with Butter",
                        img: TurkishEggs,
                        price: "$80",
                        description: "Poached eggs served with yogurt and melted butter, a traditional Turkish breakfast delicacy.",
                        details: [{ type: "Breakfast" }, { country: "Turkey" }],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-021",
                        Foodname: "Zopf",
                        img: Zopf,
                        price: "$45",
                        description: "A soft and fluffy braided Swiss bread, typically enjoyed with butter or jam. A breakfast favorite in Switzerland.",
                        details: [
                            { type: "Breakfast, Bread" },
                            { country: "Switzerland" }
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-022",
                        Foodname: "Avocado Toast",
                        img: AvocadoToast,
                        price: "$120",
                        description: "A healthy and trendy dish, with creamy avocado spread on toasted bread, often topped with seeds or spices. A perfect start to your day.",
                        details: [
                            { type: "Healthy, Breakfast" },
                            { country: "Australia" }
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-023",
                        Foodname: "Bagels with Lox",
                        img: BagelsWithLox,
                        price: "$220",
                        description: "A classic American breakfast featuring a toasted bagel topped with cream cheese, smoked salmon (lox), and garnishes like capers and onions.",
                        details: [
                            { type: "Breakfast, Snacks" },
                            { country: "USA" }
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-024",
                        Foodname: "Cinnamon Toast",
                        img: CinnamonToast,
                        price: "$120",
                        description: "A sweet and crunchy toast, topped with a generous amount of cinnamon and sugar. A comforting snack or light meal.",
                        details: [
                            { type: "Lunch" },
                            { country: "Australia" }
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-025",
                        Foodname: "French Fries",
                        img: Fries,
                        price: "$10",
                        description: "Crispy golden fries, lightly salted and perfect as a snack or a side dish. A universal favorite.",
                        details: [
                            { type: "Dinner" },
                            { country: "USA" }
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-026",
                        Foodname: "Salmon",
                        img: Salmon,
                        price: "$30",
                        description: "A delicious fillet of salmon, lightly seasoned and grilled to perfection. Ideal for a healthy dinner.",
                        details: [
                            { type: "Dinner" },
                            { country: "USA" }
                        ],
                        btn: "Add To Cart",
                    }
                    
                    
                ],
            },
            {
                id: 2,
                date: "MAY 16",
                category: "NEWS · SPA",
                image: Blogspa,
                name: "Spa And Wellness",
                path: "/Spa",
            },
            {
                id: 3,
                date: "MAY 16",
                category: "NEWS · WELLNESS",
                image: Gym,
                name: "Gym & Wellness",
                path: "/gym",
            }

        ],
    },
    {
        category: "SPA",
        path: "/spa",
        product: [],
    },
    {
        category: "WELLNESS",
        path: "/gym",
        product: [],
    },  
    {
        category: "BLOG",
        path: "/blog",
        blogPosts: [
            {
                id: 1,
                img: Blogspa,
                title: "Relaxing Spa Treatments",
                date: "August 20, 2024",
                excerpt:
                    "Discover the best spa treatments to rejuvenate your body and mind at Classic Motel.",
                link: "/blog",
            },
            {
                id: 2,
                img: Dining,
                title: "Gourmet Dining Experience",
                date: "July 15, 2024",
                excerpt:
                    "Explore our gourmet dining options, perfect for every palate.",
                link: "/food",
            },
            {
                id: 3,
                img: Room,
                title: "Luxury Room Bookings",
                date: "June 30, 2024",
                excerpt:
                    "Book your stay at Classic Motel and enjoy luxurious accommodations.",
                link: "/blog",
            },
        ],
    },
];
export default categoryApi;
