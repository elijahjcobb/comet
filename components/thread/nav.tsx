import styles from "./nav.module.css";
import { FaChevronLeft, FaInfoCircle } from "react-icons/fa";
import { ProfilePic } from "./profile-pic";

export function ThreadNav() {
	return <nav className={styles.nav}>
		<FaChevronLeft className={styles.icon} />
		<div className={styles.middle} >
			<ProfilePic />
			<span className={styles.name} >Elijah Cobb</span>
		</div>
		<FaInfoCircle className={styles.icon} />
	</nav>
}