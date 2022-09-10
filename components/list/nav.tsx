import styles from "./nav.module.css";
import { IoIosCreate, IoMdInformationCircle } from "react-icons/io";

export function Nav() {
	return <nav className={styles.nav}>
		<IoMdInformationCircle className={styles.new} />
		<h1>Comet</h1>
		<IoIosCreate className={styles.new} />
	</nav>
}