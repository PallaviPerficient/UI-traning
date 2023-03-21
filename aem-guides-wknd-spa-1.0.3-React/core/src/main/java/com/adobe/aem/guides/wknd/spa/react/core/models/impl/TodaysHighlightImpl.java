package com.adobe.aem.guides.wknd.spa.react.core.models.impl;
import org.apache.sling.models.annotations.*;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.adobe.aem.guides.wknd.spa.react.core.models.TodaysHighlight;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import org.apache.sling.api.SlingHttpServletRequest;


@Model(adaptables = SlingHttpServletRequest.class, adapters = { TodaysHighlight.class,
    ComponentExporter.class }, resourceType = RegistrationImpl.RESOURCE_TYPE, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class TodaysHighlightImpl implements TodaysHighlight {
    static final String RESOURCE_TYPE = "wknd-spa-react/components/todayHighlight";
    
    @ValueMapValue private String title;
    @ValueMapValue private String heading;
    @ValueMapValue private String description;
    @ValueMapValue private String url;
    @ValueMapValue private String linktext;

    @Override
    public String getHighlightTitle(){
        return title;
    }

    @Override 
    public String getHighlightheading(){
        return heading;
    }

    @Override
    public String getHighlightDescription(){
        return description;
    }

    @Override
    public String getHighlightRedirection(){
        return url;
    }

    @Override
    public String getHighlighturltext(){
        return linktext;
    }
    
    @Override
    public String getHighlightImage(){
        return image;
    }
    
    @ValueMapValue(name = "fileReference")
    private String image;

    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}