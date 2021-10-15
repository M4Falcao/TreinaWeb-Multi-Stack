import { useMemo, useState } from "react";
import { UserShortInterface } from "data/@types/UserInterface";
import { ValidationServices } from "data/services/ValidationServices";
import { ApiService } from "data/services/ApiService";

export default function useIndex() {
  const [cep, setCep] = useState(""),
    cepValido = useMemo(() => {
      return ValidationServices.cep(cep);
    }, [cep]),
    [erro, setErro] = useState(""),
    [buscaFeita, setBuscaFeita] = useState(false),
    [carregando, setCarregando] = useState(false),
    [diaristas, setDiaristas] = useState([] as UserShortInterface[]),
    [diaristasRestantes, setDiaristasRestantes] = useState(0);

  async function buscarProfissionais(cep: string) {
    setBuscaFeita(false);
    setCarregando(true);
    setErro("");

    try {
      await ApiService.get(
        "/api/ediaristas-cidade?cep=" + cep.replace(/\D/g, "")
      );
      setBuscaFeita(true);
      setCarregando(false);
    } catch (error) {
      setCarregando(false);
      setErro("CEP não encontrado");
    }
  }

  return {
    cep,
    setCep,
    cepValido,
  };
}
