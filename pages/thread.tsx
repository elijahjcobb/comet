import { ThreadBubble } from "../components/thread/bubble";
import { ThreadNav } from "../components/thread/nav";
import { Thread } from "../components/thread/thread";

export default function Page() {
	return <div>
		<ThreadNav />
		<Thread />
	</div>
}