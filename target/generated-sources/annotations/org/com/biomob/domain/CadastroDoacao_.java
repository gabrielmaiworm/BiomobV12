package org.com.biomob.domain;

import java.time.Instant;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(CadastroDoacao.class)
public abstract class CadastroDoacao_ {

	public static volatile SingularAttribute<CadastroDoacao, String> cidade;
	public static volatile SingularAttribute<CadastroDoacao, String> estado;
	public static volatile SingularAttribute<CadastroDoacao, Integer> numero;
	public static volatile SingularAttribute<CadastroDoacao, String> bairro;
	public static volatile SingularAttribute<CadastroDoacao, CadastroUser> nome;
	public static volatile SingularAttribute<CadastroDoacao, Boolean> realizaEntrega;
	public static volatile SingularAttribute<CadastroDoacao, String> cep;
	public static volatile SingularAttribute<CadastroDoacao, String> pais;
	public static volatile SingularAttribute<CadastroDoacao, Item> descricao;
	public static volatile SingularAttribute<CadastroDoacao, Instant> dataDoacao;
	public static volatile SingularAttribute<CadastroDoacao, String> complemento;
	public static volatile SingularAttribute<CadastroDoacao, String> logradouro;
	public static volatile SingularAttribute<CadastroDoacao, Boolean> doacaoAnonima;
	public static volatile SingularAttribute<CadastroDoacao, Long> id;
	public static volatile SingularAttribute<CadastroDoacao, Acao> acao;

	public static final String CIDADE = "cidade";
	public static final String ESTADO = "estado";
	public static final String NUMERO = "numero";
	public static final String BAIRRO = "bairro";
	public static final String NOME = "nome";
	public static final String REALIZA_ENTREGA = "realizaEntrega";
	public static final String CEP = "cep";
	public static final String PAIS = "pais";
	public static final String DESCRICAO = "descricao";
	public static final String DATA_DOACAO = "dataDoacao";
	public static final String COMPLEMENTO = "complemento";
	public static final String LOGRADOURO = "logradouro";
	public static final String DOACAO_ANONIMA = "doacaoAnonima";
	public static final String ID = "id";
	public static final String ACAO = "acao";

}

