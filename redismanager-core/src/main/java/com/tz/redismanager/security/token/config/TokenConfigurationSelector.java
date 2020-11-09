package com.tz.redismanager.security.token.config;

import com.tz.redismanager.enm.ResultCode;
import com.tz.redismanager.exception.RmException;
import com.tz.redismanager.security.domain.EnableTokenAutoConfiguration;
import com.tz.redismanager.security.token.ITokenService;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.BeanFactoryAware;
import org.springframework.context.EnvironmentAware;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportAware;
import org.springframework.context.annotation.Primary;
import org.springframework.core.annotation.AnnotationAttributes;
import org.springframework.core.env.Environment;
import org.springframework.core.type.AnnotationMetadata;
import org.springframework.lang.Nullable;

import java.util.List;
import java.util.Map;

/**
 * <p>Token ConfigurationSelector</p>
 *
 * @version 1.5.0
 * @time 2020-11-05 23:55
 * @see org.springframework.context.annotation.MBeanExportConfiguration
 **/
@Configuration
public class TokenConfigurationSelector implements ImportAware, EnvironmentAware, BeanFactoryAware {

    /**
     * @see EnableTokenAutoConfiguration#tokenType()
     */
    private static final String TOKEN_TYPE = "tokenType";

    @Nullable
    private AnnotationAttributes tokenAutoConfiguration;

    @Nullable
    private Environment environment;

    @Nullable
    private BeanFactory beanFactory;

    @Override
    public void setImportMetadata(AnnotationMetadata importMetadata) {
        Map<String, Object> map = importMetadata.getAnnotationAttributes(EnableTokenAutoConfiguration.class.getName());
        this.tokenAutoConfiguration = AnnotationAttributes.fromMap(map);
        if (this.tokenAutoConfiguration == null) {
            throw new RmException(ResultCode.ENABLE_TOKEN_NOT_PRESENT.getCode(), "@EnableTokenAutoConfiguration is not present on importing class " + importMetadata.getClassName());
        }
    }

    @Override
    public void setEnvironment(Environment environment) {
        this.environment = environment;
    }

    @Override
    public void setBeanFactory(BeanFactory beanFactory) {
        this.beanFactory = beanFactory;
    }

    @Bean
    @Primary
    public ITokenService tokenService(List<ITokenService> tokenServices) {
        String tokenType = tokenAutoConfiguration.getString(TOKEN_TYPE);
        return tokenServices.stream()
                .filter((tokenService) -> tokenService.support(tokenType))
                .findFirst()
                .orElseThrow(() ->
                        new RmException(ResultCode.ENABLE_TOKEN_TYPE_NOT_SUPPORT.getCode(), "@EnableTokenAutoConfiguration is not support tokenType-->" + tokenType));
    }

}
