import { useState } from "react";
import { Navigate } from "react-router-dom";

import { SubscriptionContent } from "../../components/HeartScore/Subscription/";
import { SubscriptionOptions } from "../../models/heartscore-subscription"

export const Subscription = () => {
  const [subscribed, setSubscribed] = useState<boolean>(false)
  
  const handleSubscription = (params: SubscriptionOptions):void => {
    console.info(params)
    setSubscribed(true)
  }

  return subscribed ? <Navigate to="/heart-score/quizzes" replace={true} /> : <SubscriptionContent onSubscription={handleSubscription}/>
}