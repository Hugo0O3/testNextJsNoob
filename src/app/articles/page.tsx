import Link from "next/link";

export default function ArticlesPage() {
    return (
        <section>
            <h1>Liste des articles</h1>
            <Link href="/articles/new">
                <button>Créer un nouvel article</button>
            </Link>
        </section>
    );
}