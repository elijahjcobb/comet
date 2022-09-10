import styles from "./bubble.module.css";
import { clsx } from "clsx";

function randomMessage() {
	return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac ultricies lectus. Donec lorem velit, efficitur eget tristique eu, rhoncus eget lacus. Nam imperdiet lacus purus, et finibus risus pulvinar a. Vestibulum venenatis viverra mi, eget gravida leo eleifend quis. Proin ut metus felis. Vivamus in erat nibh. Sed porttitor orci mauris, non dictum lectus consequat nec. Suspendisse venenatis, quam dapibus lobortis viverra, arcu justo auctor massa, at ornare diam ex ac libero. Donec accumsan lectus quam, ut mollis purus convallis ac. Sed eu sodales elit, in mattis nisi.'
		.slice(0, Math.floor(Math.random() * 100) + 1);
}

export function ThreadBubble() {
	return <div className={clsx(styles.bubble, (Math.random() > 0.25 && styles.receiver))}>
		<span className={styles.msg}>{randomMessage()}</span>
	</div>
}