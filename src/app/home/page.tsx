import { Feedbacks } from "./components/feedbacks/Feedbacks";
import { Navbar } from "./components/navbar/Navbar";
import { Products } from "./components/products/Products";

export default function home() {
    return (
        <>
            <Navbar />
            <main>
                <Products />
                {/* <Feedbacks /> */}
            </main>
        </>
    )
}