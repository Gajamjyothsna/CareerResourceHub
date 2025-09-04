import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Book, Video } from "lucide-react";
import Link from "next/link";

const documents = [
    {
        title: "React Fundamentals",
        href: "https://google.com",
        icon: <Book className="h-6 w-6 text-primary" />,
    },
    {
        title: "Advanced CSS Techniques",
        href: "https://google.com",
        icon: <Book className="h-6 w-6 text-primary" />,
    },
    {
        title: "JavaScript Design Patterns",
        href: "https://google.com",
        icon: <Book className="h-6 w-6 text-primary" />,
    },
];

const videos = [
    {
        title: "React Crash Course",
        href: "https://youtube.com",
        icon: <Video className="h-6 w-6 text-primary" />,
    },
    {
        title: "CSS Grid Tutorial",
        href: "https://youtube.com",
        icon: <Video className="h-6 w-6 text-primary" />,
    },
];

export default function FrontendResourcesPage() {
    return (
        <div>
            <Button asChild variant="outline" className="mb-6">
                <Link href="/dashboard">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Dashboard
                </Link>
            </Button>
            <h2 className="text-3xl font-bold mb-8">Frontend Developer Resources</h2>

            <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">Documents</h3>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {documents.map((resource, index) => (
                        <Card key={index} className="flex flex-col justify-between hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                    {resource.icon}
                                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardFooter>
                                <Button asChild className="w-full">
                                    <Link href={resource.href} target="_blank">Open Document</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold mb-6">Videos</h3>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {videos.map((resource, index) => (
                        <Card key={index} className="flex flex-col justify-between hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                    {resource.icon}
                                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardFooter>
                                <Button asChild className="w-full">
                                    <Link href={resource.href} target="_blank">Watch Video</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
