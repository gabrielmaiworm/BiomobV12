package org.com.biomob.domain;

import java.time.Instant;
import java.time.LocalDate;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Acao.class)
public abstract class Acao_ {

	public static volatile SingularAttribute<Acao, String> usuarioCriacaoAcao;
	public static volatile SingularAttribute<Acao, String> observacoes;
	public static volatile SingularAttribute<Acao, Solicitacao> solicitacao;
	public static volatile SingularAttribute<Acao, byte[]> foto;
	public static volatile SingularAttribute<Acao, CadastroDoacao> cadastroDoacao;
	public static volatile SingularAttribute<Acao, Long> id;
	public static volatile SingularAttribute<Acao, Boolean> pendente;
	public static volatile SingularAttribute<Acao, LocalDate> dataExecucaoAcao;
	public static volatile SingularAttribute<Acao, String> fotoContentType;
	public static volatile SingularAttribute<Acao, CadastroUser> cadastroUser;
	public static volatile SingularAttribute<Acao, Boolean> ativa;
	public static volatile SingularAttribute<Acao, Instant> dataCriacao;

	public static final String USUARIO_CRIACAO_ACAO = "usuarioCriacaoAcao";
	public static final String OBSERVACOES = "observacoes";
	public static final String SOLICITACAO = "solicitacao";
	public static final String FOTO = "foto";
	public static final String CADASTRO_DOACAO = "cadastroDoacao";
	public static final String ID = "id";
	public static final String PENDENTE = "pendente";
	public static final String DATA_EXECUCAO_ACAO = "dataExecucaoAcao";
	public static final String FOTO_CONTENT_TYPE = "fotoContentType";
	public static final String CADASTRO_USER = "cadastroUser";
	public static final String ATIVA = "ativa";
	public static final String DATA_CRIACAO = "dataCriacao";

}

