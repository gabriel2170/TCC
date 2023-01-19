import Link from 'next/link';
import { useAppContext } from '../../contexts/app';
import { useFormatter } from '../../lib/useFormatter';
import { Product } from '../../types/Product';
import styles from './styles.module.css';

type Props = {
    data: Product;
}

export function ProductItemCart({ data }: Props) {
    const { tenant } = useAppContext();

    const formatter = useFormatter();

    return (
        <Link href={tenant?.slug + '/product/' + data.id}>
            <a className={styles.container}>
                <div className={styles.head} style={{ backgroundColor: tenant?.primaryColor }}></div>
                <div className={styles.info}>

                    <div className={styles.img}>
                        <img src={data.image} />
                    </div>

                    <div className={styles.tName}>{data.categoryName}</div>
                    <div className={styles.name}>{data.name}</div>
                    <div className={styles.price} style={{ color: tenant?.primaryColor }}>{formatter.formatPrice(data.price)}</div>

                </div>
            </a>
        </Link>
        
    );
}