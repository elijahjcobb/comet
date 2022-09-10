import { FaChevronRight } from "react-icons/fa";
import { ProfilePic } from "../thread/profile-pic";
import styles from "./row.module.css";

export function Row() {
	return <div className={styles.row}>
		<ProfilePic />
		<div className={styles.right}>
			<div className={styles.top}>
				<span className={styles.name}>Elijah Cobb</span>
				<div className={styles.dateContainer}>
					<span className={styles.date}>Tuesday</span>
					<FaChevronRight className={styles.chevron} />
				</div>
			</div>
			<span className={styles.date}>This is the message ahh!</span>
		</div>
	</div>
}