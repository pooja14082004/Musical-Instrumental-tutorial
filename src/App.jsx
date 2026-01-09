import Navbar from "./components/ui/Navbar";
import { Button } from "./components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "./components/ui/card";

export default function App() {

    const instruments = [
        {
            name: "Guitar Classes",
            time: "Monday & Wednesday | 6:00 PM - 8:00 PM",
            img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d"
        },
        {
            name: "Piano Classes",
            time: "Tuesday & Thursday | 4:00 PM - 6:00 PM",
            img: "https://images.unsplash.com/photo-1513883049090-d0b7439799bf"
        },
        {
            name: "Violin Classes",
            time: "Saturday | 10:00 AM - 12:00 PM",
            img: "https://images.unsplash.com/photo-1454922915609-78549ad709bb"
        },
        {
            name: "Drums Classes",
            time: "Friday | 5:00 PM - 7:00 PM",
            img: "https://images.unsplash.com/photo-1507838153414-b4b713384a76"
        },
        {
            name: "Flute Classes",
            time: "Flexible Schedule",
            img: "https://tse1.explicit.bing.net/th/id/OIP.jxUSWMPqsP2as0R2qMKoowHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
        },
        {
            name: "Keyboard Classes",
            time: "Flexible Schedule",
            img: "https://images.unsplash.com/photo-1508780709619-79562169bc64"
        },
    ];

    return (
        <div className="min-h-screen bg-neutral-100">

            {/* NAVBAR */}
            <Navbar />

            <section
                className="h-[70vh] flex items-center px-16"
                style={{
                    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)),
      url("https://images.unsplash.com/photo-1485579149621-3123dd979885")
    `,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="max-w-xl">

                    {/* TITLE */}
                    <h1 className="text-5xl font-extrabold text-blue-900 leading-tight">
                        Live 1 to 1 Online <br />
                        <span className="text-blue-600">Music Classes</span>
                    </h1>

                    {/* SUB TEXT */}
                    <p className="mt-4 text-gray-700 text-base">
                        Taught by professional tutors for all ages <br />
                        Instructions in English & all Major Indian languages
                    </p>

                    {/* STATS */}
                    <div className="flex items-center gap-10 mt-6">
                        <div>
                            <h2 className="text-3xl font-bold text-blue-800">75+</h2>
                            <p className="text-sm text-gray-600">Professional Tutors</p>
                        </div>

                        <div className="h-10 w-px bg-gray-300"></div>

                        <div>
                            <h2 className="text-3xl font-bold text-blue-800">120+</h2>
                            <p className="text-sm text-gray-600">Cities Worldwide</p>
                        </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="flex gap-4 mt-8">
                        <button className="px-7 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700">
                            Book a FREE Demo
                        </button>

                        <button className="px-7 py-3 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600">
                            WhatsApp Us
                        </button>
                    </div>

                </div>
            </section>

            {/* FLOATING SEARCH BAR */}
            <div className="w-full flex justify-center -mt-6">
                <div className="w-[60%] bg-white shadow-lg rounded-2xl px-5 py-3 flex items-center gap-3">
                    <input
                        type="text"
                        placeholder="Search Guitar, Piano, Violin, Drums..."
                        className="w-full outline-none"
                    />
                    <span className="text-lg">🔍</span>
                </div>
            </div>

            {/* SECTION TITLE */}
            <section className="px-14 py-10">
                <h2 className="text-2xl font-semibold">
                    Find Your Instrumental Class
                </h2>

                <p className="text-gray-500 mt-1">
                    Personalized lessons for all ages and skill levels
                </p>

                {/* GRID CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">

                    {instruments.map((item, index) => (
                        <Card
                            key={index}
                            className="rounded-2xl shadow-md overflow-hidden"
                        >
                            <img
                                src={item.img}
                                alt={item.name}
                                className="h-48 w-full object-cover"
                            />

                            <CardHeader>
                                <CardTitle>{item.name}</CardTitle>
                            </CardHeader>

                            <CardContent>
                                <p className="text-sm text-gray-500">
                                    {item.time}
                                </p>

                                <Button className="mt-3 w-full rounded-xl bg-[#2e6fae]">
                                    View Details
                                </Button>
                            </CardContent>
                        </Card>
                    ))}

                </div>
            </section>
            {/* TESTIMONIALS SECTION */}
            <section className="px-14 py-10">

                <h2 className="text-2xl font-semibold text-center">
                    What Our Students Say
                </h2>

                <p className="text-gray-500 text-center mt-1">
                    Real experiences from our passionate learners
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">

                    {/* Review 1 */}
                    <div className="bg-white p-5 rounded-2xl shadow-md">
                        <p className="text-yellow-500 mb-1">⭐⭐⭐⭐⭐</p>
                        <p>
                            “The guitar classes helped me build confidence and stage performance skills.”
                        </p>

                        <h3 className="mt-3 font-semibold">— Akash (Beginner Guitar)</h3>
                    </div>

                    {/* Review 2 */}
                    <div className="bg-white p-5 rounded-2xl shadow-md">
                        <p className="text-yellow-500 mb-1">⭐⭐⭐⭐⭐</p>
                        <p>
                            “Teachers are friendly and give individual attention. Best music academy!”
                        </p>

                        <h3 className="mt-3 font-semibold">— Priya (Piano Intermediate)</h3>
                    </div>

                    {/* Review 3 */}
                    <div className="bg-white p-5 rounded-2xl shadow-md">
                        <p className="text-yellow-500 mb-1">⭐⭐⭐⭐⭐</p>
                        <p>
                            “Drums class training is very professional with structured practice plans.”
                        </p>

                        <h3 className="mt-3 font-semibold">— Rahul (Drums Student)</h3>
                    </div>

                </div>
            </section>


            {/* BOTTOM CTA SECTION */}
            <div className="px-14 pb-12">
                <div className="bg-[#1f3d64] text-white rounded-2xl p-10 text-center shadow-lg">

                    <h2 className="text-2xl font-semibold">
                        Unlock Your Musical Potential!
                    </h2>

                    <p className="opacity-90 mt-1">
                        Join our community of passionate learners & musicians
                    </p>

                    <button className="mt-4 px-6 py-3 bg-orange-500 rounded-xl hover:opacity-90">
                        Learn More About Us
                    </button>
                </div>
            </div>

        </div>
    );
} 