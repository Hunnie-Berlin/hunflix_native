import React, { useState } from "react";
import { ActivityIndicator, RefreshControl, ScrollView } from "react-native";
import PropTypes from "prop-types";

const ScrollContainer = ({
  isLoading,
  children,
  refreshFn,
  contentContainerStyle,
}) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await refreshFn();
    setRefreshing(false);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          onRefresh={onRefresh}
          refreshing={refreshing}
          enabled={false}
          tintColor={"white"}
        />
      }
      style={{ backgroundColor: "black" }}
      contentContainerStyle={{
        flex: isLoading ? 1 : 0,
        justifyContent: isLoading ? "center" : "flex-start",
        ...contentContainerStyle,
      }}
    >
      {isLoading ? <ActivityIndicator color="white" size="large" /> : children}
    </ScrollView>
  );
};

ScrollContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  refreshFn: PropTypes.func,
};

export default ScrollContainer;
