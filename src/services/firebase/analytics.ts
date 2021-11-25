import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { analytics } from "./index";

//Função para registrar eventos
const analyticsEvent = (event: string, params?: object) => {
  return analytics.logEvent(analytics.key, event, params);
};

//Componente para ouvir trocas de rotas
const RouterListener = () => {
  const location = useLocation();
  useEffect(() => {
    analyticsEvent("screen_view", { screen_name: location.pathname });
  }, [location]);

  return null;
};

const setFavoriteMusic = (f_music: string) => {
  /**
   * Propriedades do usuário que serão registradas automaticamente.
   * support.google.com/analytics/answer/9268042?hl=pt-BR&ref_topic=9267641
   **/
  return analytics.setUserProperties(analytics.key, {
    favorite_music: f_music,
  });
};

const setUserId = (user_id: string) => {
  /**
   * Um id para vincular eventos a um usuário. (Totalmente opcional, o analytics faz isso automaticamente.)
   * Se usa esse id caso queira usar o Google Analytics em conjunto com o BigQuery.
   * Associa dados de análise do mesmo usuário em vários aplicativos, dispositivos ou provedores de análise
   */
  return analytics.setUserId(analytics.key, user_id);
};

export { analyticsEvent, RouterListener, setFavoriteMusic, setUserId };
