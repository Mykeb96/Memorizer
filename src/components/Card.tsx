import { useState } from 'react'
import styles from '../styles/components/Card.module.scss'

interface CardProps {
    num: number;
}

export default function Card({ num }: CardProps) {
    const [enabled, setEnabled] = useState<boolean>(false);

    const handleState = () => {
        setEnabled(!enabled);
    }

    return (
        <div className={styles.container}>
            <h5>Card {num}</h5>
            <button onClick={handleState}>enabled: {enabled.toString()}</button>
        </div>
    )
}