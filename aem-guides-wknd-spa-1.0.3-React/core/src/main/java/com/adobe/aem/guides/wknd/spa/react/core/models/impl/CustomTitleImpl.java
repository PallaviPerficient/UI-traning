package com.adobe.aem.guides.wknd.spa.react.core.models.impl;

import org.apache.sling.models.annotations.*;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import org.apache.sling.api.SlingHttpServletRequest;

import com.adobe.aem.guides.wknd.spa.react.core.models.CustomTitle;

@Model(adaptables = SlingHttpServletRequest.class, adapters = { CustomTitle.class,
    ComponentExporter.class }, resourceType = CustomTitleImpl.RESOURCE_TYPE, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class CustomTitleImpl implements CustomTitle {

    @ValueMapValue
    private String textTitle;
    private String text;

    static final String RESOURCE_TYPE = "wknd-spa-react/components/custom-title";

    @Override 
    public String getTextTitle(){
        return textTitle;
    }

    @Override
    public String getText(){
        return text;
    }
    @Override
    public String getImage(){
        return image;
    }

    
    @ValueMapValue(name = "fileReference")
    private String image;

    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}   