"use client";

import{ useState } from "react"; 
import { fetchImage } from "./fetch-image";
import styles from "./page.module.css"; // CSSモジュールのインポート

type CatImageProps = {
    url: string;    // 画像のURLを受け取るプロパティ、初期値の設定にもなっている
};

export function CatImage({ url }: CatImageProps) {

    const [imageUrl, setImageUrl] = useState(url); //状態管理の宣言、初期値の宣言にもなる
    const refreshImage = async () => {  //画像を更新する関数
        // setImageUrl("");    // 画像を空にして、更新中の状態を示す->余計なレンダリングまでしてしまっている
        const image = await fetchImage(); // 新しい画像を取得
        setImageUrl(image.url); // 取得した画像のURLをUsestateに設定
    };

    return (
        <div className={styles.page}>
            <button onClick={refreshImage} className={styles.button}>
                他のにゃんこもみる
            </button>
            <div className={styles.frame}>
                {imageUrl && <img src={imageUrl}  className={styles.img}/>}
            </div>
        </div>
    );
}