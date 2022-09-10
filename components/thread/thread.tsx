import { ThreadBubble } from "./bubble";
import styles from "./thread.module.css";

export function Thread() {
	return <div className={styles.thread}>
		<ThreadBubble />
		<ThreadBubble />
		<ThreadBubble />
		<ThreadBubble />
		<ThreadBubble />
		<ThreadBubble />
		<ThreadBubble />
		<ThreadBubble />
		<ThreadBubble />
		<ThreadBubble />
		<ThreadBubble />
		<ThreadBubble />
	</div>
}