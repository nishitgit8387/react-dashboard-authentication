import { Tag, Text } from "@chakra-ui/react";
import { CustomCard } from "../../../Chakra/CustomCard";

const InfoCard = ({ imgUrl, text, tagText, inverted }) => {
  return (
    <CustomCard
      bgImage={imgUrl}
      bgColor={inverted ? "P.purple" : "white"}
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Tag
        color={inverted ? "P.purple" : "white"}
        bg={inverted ? "white" : "P.purple"}
        borderRadius="full"
      >
        {tagText}
      </Tag>
      <Text
        mt={4}
        fontWeight="medium"
        textStyle="h5"
        color={inverted ? "white" : "black.80"}
      >
        {text}
      </Text>
    </CustomCard>
  );
};

export default InfoCard;
