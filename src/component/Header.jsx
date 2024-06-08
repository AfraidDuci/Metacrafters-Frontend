import { Flex } from "@radix-ui/themes";
import GiveRightToVoteComponent from "./GiveRightToVoteComponent";
import useIsChairPerson from "../hooks/useIsChairPerson";

export default function Header() {
    const isChairPerson = useIsChairPerson();
    return (
        <div className="flex justify-between items-center">
            <div className="u-class-1">Class Election</div>
            <Flex gap={"4"} align={"center"}>
                {isChairPerson && <GiveRightToVoteComponent />}
                <w3m-button />
            </Flex>
        </div>
    );
}
