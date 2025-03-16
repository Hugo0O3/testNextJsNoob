import { NextResponse } from "next/server";
import { PrismaClient, Status } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
        const { title, content } = await req.json()

        if (!title || !content) {
            return NextResponse.json(
                { message: "Le titre et le contenu sont requis." },
                { status: 400 }
            );
        }

        const article = await prisma.article.create({
            data: {
                title,
                content,
                status: Status.OPEN,
            },
        });

        return NextResponse.json(article, { status: 201 });
    } catch (error) {
        console.error("Erreur lors de la création de l'article:", error);
        return NextResponse.json(
            { message: "Erreur serveur" },
            { status: 500 }
        );
    }
}