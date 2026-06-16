import { Metadata } from "next";
import axios from "axios";
import FeedbackPage from "@/components/pages/feedback";

type Props = {
  params: Promise<{ slug: string }>;
};

interface articleRes {
  data?: {
    title: string;
    description: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata | null> {
  const slug = (await params).slug;
  try {
    const article = await axios.get<articleRes>(`/api/feedback/${slug}`);
    if (!article.data.data) return null;

    const { title, description } = article.data.data;
    const desc = description.length > 255 ? `${description.substring(0, 255)}...` : description;

    return {
      title,
      description: desc,
      openGraph: {
        title,
        description: desc
      },
    };
  } catch {
    return null;
  }
}

export default function Page() {
  return <FeedbackPage />;
}