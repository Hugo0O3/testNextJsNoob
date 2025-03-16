'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewArticlePage() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const articleData = { title, content };

        try {
            const res = await fetch('/articles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(articleData),
            });

            if (res.ok) {
                router.push('/articles');
            } else {
                console.error("Erreur lors de l'ajout de l'article.");
            }
        } catch (error) {
            console.error("Erreur lors de la requête:", error);
        }
    };

    return (
        <section>
            <h1>Créer un nouvel article</h1>
            <form onSubmit={handleSubmit}>
                <section>
                    <label>Titre :</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </section>
                <section>
                    <label>Contenu :</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </section>
                <button type="submit">Créer l'article</button>
            </form>
        </section>
    );
}