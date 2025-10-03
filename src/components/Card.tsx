import styles from '../styles/components/Card.module.scss'

import type { Card } from '../App'

interface CardProps {
    color: string;
    id: string;
    partnerId: string;
    handleGameState: (card: Card) => void;
}

export default function Card({ color, id, partnerId, handleGameState }: CardProps) {
    let isActive = true;

    return (
        <div className={styles.container} style={{backgroundColor: isActive ? color : 'none'}}>
            <span>{color}</span>
            <button onClick={() => handleGameState({color: color, id: id, partnerId: partnerId})}>Click</button>
        </div>
    )
}