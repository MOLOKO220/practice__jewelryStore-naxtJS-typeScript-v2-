import Link from "next/link";
import React from "react";
import style from "./ProductsWrapp.module.scss";

interface ProductsWrappProps {
  id: number;
  title: string;
  img: string;
  pricse: number;
  category: string;
}

export default function ProductsWrapp(props: ProductsWrappProps) {
  return (
    <div className={style.ProductsWrapp}>
      <img src={props.img} />
      <p>{props.category}</p>
      <h5>{props.title}</h5>
      <Link href={`/${props.id}`}>
        <button>{props.pricse} ₽</button>
      </Link>
    </div>
  );
}
