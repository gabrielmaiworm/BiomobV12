package org.com.biomob.domain;

import java.time.Instant;
import java.time.LocalDate;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Solicitacao.class)
public abstract class Solicitacao_ {

	public static volatile SingularAttribute<Solicitacao, Boolean> anonima;
	public static volatile SingularAttribute<Solicitacao, Instant> dataSolicitacao;
	public static volatile SingularAttribute<Solicitacao, LocalDate> dataAprovacao;
	public static volatile SingularAttribute<Solicitacao, Boolean> aprovado;
	public static volatile SingularAttribute<Solicitacao, String> solicitante;
	public static volatile SingularAttribute<Solicitacao, String> enderecoEntrega;
	public static volatile SingularAttribute<Solicitacao, String> localDeEntrega;
	public static volatile SingularAttribute<Solicitacao, CadastroUser> nome;
	public static volatile SingularAttribute<Solicitacao, Long> id;
	public static volatile SingularAttribute<Solicitacao, Boolean> ativa;
	public static volatile SingularAttribute<Solicitacao, Acao> acao;
	public static volatile SingularAttribute<Solicitacao, Item> descricao;

	public static final String ANONIMA = "anonima";
	public static final String DATA_SOLICITACAO = "dataSolicitacao";
	public static final String DATA_APROVACAO = "dataAprovacao";
	public static final String APROVADO = "aprovado";
	public static final String SOLICITANTE = "solicitante";
	public static final String ENDERECO_ENTREGA = "enderecoEntrega";
	public static final String LOCAL_DE_ENTREGA = "localDeEntrega";
	public static final String NOME = "nome";
	public static final String ID = "id";
	public static final String ATIVA = "ativa";
	public static final String ACAO = "acao";
	public static final String DESCRICAO = "descricao";

}

