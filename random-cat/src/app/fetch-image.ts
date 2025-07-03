"use server";
import { CAT_API_KEY } from "./env";

type Image = {
    url: string;
};

export async function fetchImage(): Promise<Image> {
    const response = await fetch("https://api.thecatapi.com/v1/images/search", {
        headers: {"x-api-key": CAT_API_KEY },
    });
    const images = await response.json();
    console.log("fetchImage: 画像を取得しました", images);
    return images[0];
    }