package com.adobe.aem.guides.wknd.spa.react.core.models.impl;

import org.apache.sling.models.annotations.*;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import org.apache.sling.api.SlingHttpServletRequest;

import com.adobe.aem.guides.wknd.spa.react.core.models.MultiField;

@Model(adaptables = SlingHttpServletRequest.class, adapters = { MultiField.class,
    ComponentExporter.class }, resourceType = MultiFieldImpl.RESOURCE_TYPE, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class MultiFieldImpl implements MultiField {

    @ValueMapValue
    private String textTitle;
    private String text;
    private String heading;

    static final String RESOURCE_TYPE = "wknd-spa-react/components/MultiField";
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
    @Override
    public String getHeading(){
        return heading;
    }
    
    @ValueMapValue(name = "fileReference")
    private String image;

    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}   