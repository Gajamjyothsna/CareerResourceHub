import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, ArrowRight, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DashboardPage() {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="flex flex-col justify-between hover:shadow-lg transition-shadow">
                <div>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">
                            Java Developer
                        </CardTitle>
                        <Code className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="relative h-40 mb-4">
                            <Image
                                src="https://picsum.photos/400/200"
                                alt="Java Developer Roadmap"
                                fill
                                objectFit="cover"
                                className="rounded-md"
                                data-ai-hint="programming code"
                            />
                        </div>
                    </CardContent>
                </div>
                <CardFooter>
                    <Button asChild className="w-full">
                        <Link href="/dashboard/java-resources">
                            Open Resources
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
            <Card className="flex flex-col justify-between hover:shadow-lg transition-shadow">
                 <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">
                        Frontend Developer
                    </CardTitle>
                     <Code className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="relative h-40 mb-4">
                        <Image
                            src="https://picsum.photos/400/200?grayscale"
                            alt="Frontend Developer Resources"
                            fill
                            objectFit="cover"
                            className="rounded-md"
                            data-ai-hint="user interface design"
                        />
                    </div>
                </CardContent>
                <CardFooter>
                     <Button asChild className="w-full">
                        <Link href="/dashboard/frontend-resources">
                            Open Resources
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
