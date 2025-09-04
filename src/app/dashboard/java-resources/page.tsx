import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Book, FileText } from "lucide-react";
import Link from "next/link";

const resources = [
    {
        title: "Java Core Concepts",
        description: "Master the fundamentals of Java programming.",
        href: "https://google.com",
        icon: <Book className="h-6 w-6 text-primary" />,
    },
    {
        title: "Spring Framework Guide",
        description: "Learn the most popular framework for building Java applications.",
        href: "https://google.com",
        icon: <FileText className="h-6 w-6 text-primary" />,
    },
    {
        title: "Data Structures in Java",
        description: "Understand key data structures for efficient coding.",
        href: "https://google.com",
        icon: <Book className="h-6 w-6 text-primary" />,
    },
];

export default function JavaResourcesPage() {
    return (
        <div>
            <Button asChild variant="outline" className="mb-6">
                <Link href="/dashboard">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Dashboard
                </Link>
            </Button>
            <h2 className="text-3xl font-bold mb-8">Java Developer Resources</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {resources.map((resource, index) => (
                    <Card key={index} className="flex flex-col justify-between hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="flex items-start gap-4">
                                {resource.icon}
                                <div>
                                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                                    <p className="text-sm text-muted-foreground mt-1">{resource.description}</p>
                                </div>
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
    );
}
